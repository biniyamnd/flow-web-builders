import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { LogOut, Search, Briefcase, CheckCircle, MessageCircle, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Job {
  id: string;
  title: string;
  description: string;
  budget: string;
  postedAt: string;
  institution: string;
  applied?: boolean;
}

interface AppliedJob extends Job {
  status: "pending" | "accepted" | "rejected";
  appliedAt: string;
}

interface Message {
  id: string;
  sender: "institution" | "freelancer";
  text: string;
  time: string;
}

interface Chat {
  id: string;
  institutionName: string;
  jobTitle: string;
  messages: Message[];
}

const mockAvailableJobs: Job[] = [
  {
    id: "1",
    title: "Web Developer Needed",
    description: "Looking for a skilled React developer for a 3-month project. Must have experience with TypeScript and Tailwind CSS.",
    budget: "$5,000",
    postedAt: "2 days ago",
    institution: "TechCorp Inc.",
  },
  {
    id: "2",
    title: "UI/UX Designer",
    description: "Need a designer to redesign our mobile app interface. Experience with Figma required.",
    budget: "$3,000",
    postedAt: "1 week ago",
    institution: "Design Studio",
  },
  {
    id: "3",
    title: "Content Writer",
    description: "Looking for a content writer for blog posts and marketing materials.",
    budget: "$1,500",
    postedAt: "3 days ago",
    institution: "Marketing Agency",
  },
  {
    id: "4",
    title: "Data Analyst",
    description: "Need a data analyst to help with business intelligence and reporting.",
    budget: "$4,000",
    postedAt: "5 days ago",
    institution: "Analytics Co.",
  },
];

const mockAppliedJobs: AppliedJob[] = [
  {
    id: "5",
    title: "Mobile App Developer",
    description: "Build a cross-platform mobile app using React Native.",
    budget: "$8,000",
    postedAt: "2 weeks ago",
    institution: "App Startup",
    status: "pending",
    appliedAt: "1 week ago",
  },
  {
    id: "6",
    title: "Backend Engineer",
    description: "Develop REST APIs using Node.js and PostgreSQL.",
    budget: "$6,000",
    postedAt: "3 weeks ago",
    institution: "Tech Solutions",
    status: "accepted",
    appliedAt: "2 weeks ago",
  },
];

const mockChats: Chat[] = [
  {
    id: "1",
    institutionName: "TechCorp Inc.",
    jobTitle: "Web Developer Needed",
    messages: [
      { id: "1", sender: "institution", text: "Hi! We reviewed your application.", time: "10:30 AM" },
      { id: "2", sender: "freelancer", text: "Great! I'm excited about this opportunity.", time: "10:35 AM" },
    ],
  },
  {
    id: "2",
    institutionName: "Tech Solutions",
    jobTitle: "Backend Engineer",
    messages: [
      { id: "1", sender: "institution", text: "Congratulations! You've been selected.", time: "Yesterday" },
      { id: "2", sender: "freelancer", text: "Thank you! When can we start?", time: "Yesterday" },
    ],
  },
];

const FreelancerDashboard = () => {
  const navigate = useNavigate();
  const [availableJobs, setAvailableJobs] = useState<Job[]>(mockAvailableJobs);
  const [appliedJobs, setAppliedJobs] = useState<AppliedJob[]>(mockAppliedJobs);
  const [chats] = useState<Chat[]>(mockChats);
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleLogout = () => {
    toast({ title: "Logged out successfully" });
    navigate("/");
  };

  const handleApply = (job: Job) => {
    const appliedJob: AppliedJob = {
      ...job,
      status: "pending",
      appliedAt: "Just now",
    };
    setAppliedJobs([appliedJob, ...appliedJobs]);
    setAvailableJobs(availableJobs.map((j) => (j.id === job.id ? { ...j, applied: true } : j)));
    toast({ title: "Application submitted!", description: `Applied to ${job.title}` });
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedChat) return;
    toast({ title: "Message sent!" });
    setNewMessage("");
  };

  const filteredJobs = availableJobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: AppliedJob["status"]) => {
    switch (status) {
      case "pending":
        return <Badge variant="secondary">Pending</Badge>;
      case "accepted":
        return <Badge className="bg-green-500 hover:bg-green-600">Accepted</Badge>;
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-display font-bold">Freelancer Dashboard</h1>
        <Button variant="outline" onClick={handleLogout} className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="browse" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="browse" className="flex items-center gap-2">
              <Search className="w-4 h-4" />
              Browse Jobs
            </TabsTrigger>
            <TabsTrigger value="applied" className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Applied Jobs
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Chat
            </TabsTrigger>
          </TabsList>

          {/* Browse Jobs Tab */}
          <TabsContent value="browse">
            <div className="mb-6">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search jobs..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {filteredJobs.map((job) => (
                <Card key={job.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{job.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{job.institution}</p>
                      </div>
                      <span className="font-semibold text-primary">{job.budget}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-muted-foreground">Posted {job.postedAt}</p>
                      <Button
                        onClick={() => handleApply(job)}
                        disabled={job.applied}
                        variant={job.applied ? "outline" : "default"}
                      >
                        {job.applied ? "Applied" : "Apply Now"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Applied Jobs Tab */}
          <TabsContent value="applied">
            <div className="grid gap-4 md:grid-cols-2">
              {appliedJobs.map((job) => (
                <Card key={job.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{job.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{job.institution}</p>
                      </div>
                      {getStatusBadge(job.status)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-primary">{job.budget}</span>
                      <span className="text-muted-foreground">Applied {job.appliedAt}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Chat Tab */}
          <TabsContent value="chat">
            <div className="grid md:grid-cols-3 gap-4 h-[500px]">
              {/* Chat List */}
              <Card className="md:col-span-1">
                <CardHeader>
                  <CardTitle className="text-lg">Conversations</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  {chats.map((chat) => (
                    <button
                      key={chat.id}
                      onClick={() => setSelectedChat(chat)}
                      className={`w-full p-4 text-left border-b hover:bg-muted/50 transition-colors ${
                        selectedChat?.id === chat.id ? "bg-muted" : ""
                      }`}
                    >
                      <p className="font-medium">{chat.institutionName}</p>
                      <p className="text-sm text-muted-foreground truncate">{chat.jobTitle}</p>
                    </button>
                  ))}
                </CardContent>
              </Card>

              {/* Chat Window */}
              <Card className="md:col-span-2 flex flex-col">
                {selectedChat ? (
                  <>
                    <CardHeader className="border-b">
                      <CardTitle className="text-lg">{selectedChat.institutionName}</CardTitle>
                      <p className="text-sm text-muted-foreground">{selectedChat.jobTitle}</p>
                    </CardHeader>
                    <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                      {selectedChat.messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${msg.sender === "freelancer" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[70%] p-3 rounded-lg ${
                              msg.sender === "freelancer"
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted"
                            }`}
                          >
                            <p>{msg.text}</p>
                            <p className="text-xs opacity-70 mt-1">{msg.time}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                    <div className="p-4 border-t flex gap-2">
                      <Input
                        placeholder="Type a message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      />
                      <Button onClick={handleSendMessage}>
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex items-center justify-center text-muted-foreground">
                    Select a conversation to start chatting
                  </div>
                )}
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default FreelancerDashboard;
