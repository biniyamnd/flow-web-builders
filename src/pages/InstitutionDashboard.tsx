import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogOut, Plus, Briefcase, MessageCircle, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Job {
  id: string;
  title: string;
  description: string;
  budget: string;
  postedAt: string;
  applicants: number;
}

interface Message {
  id: string;
  sender: "institution" | "freelancer";
  text: string;
  time: string;
}

interface Chat {
  id: string;
  freelancerName: string;
  jobTitle: string;
  messages: Message[];
}

const mockJobs: Job[] = [
  {
    id: "1",
    title: "Web Developer Needed",
    description: "Looking for a skilled React developer for a 3-month project.",
    budget: "$5,000",
    postedAt: "2 days ago",
    applicants: 5,
  },
  {
    id: "2",
    title: "UI/UX Designer",
    description: "Need a designer to redesign our mobile app interface.",
    budget: "$3,000",
    postedAt: "1 week ago",
    applicants: 12,
  },
];

const mockChats: Chat[] = [
  {
    id: "1",
    freelancerName: "John Doe",
    jobTitle: "Web Developer Needed",
    messages: [
      { id: "1", sender: "freelancer", text: "Hi, I'm interested in this project!", time: "10:30 AM" },
      { id: "2", sender: "institution", text: "Great! Can you share your portfolio?", time: "10:35 AM" },
    ],
  },
  {
    id: "2",
    freelancerName: "Jane Smith",
    jobTitle: "UI/UX Designer",
    messages: [
      { id: "1", sender: "freelancer", text: "I have 5 years of experience in UI design.", time: "Yesterday" },
    ],
  },
];

const InstitutionDashboard = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<Job[]>(mockJobs);
  const [chats] = useState<Chat[]>(mockChats);
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [newJob, setNewJob] = useState({ title: "", description: "", budget: "" });

  const handleLogout = () => {
    toast({ title: "Logged out successfully" });
    navigate("/");
  };

  const handlePostJob = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newJob.title || !newJob.description || !newJob.budget) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    const job: Job = {
      id: Date.now().toString(),
      ...newJob,
      postedAt: "Just now",
      applicants: 0,
    };
    setJobs([job, ...jobs]);
    setNewJob({ title: "", description: "", budget: "" });
    toast({ title: "Job posted successfully!" });
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedChat) return;
    toast({ title: "Message sent!" });
    setNewMessage("");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-display font-bold">Institution Dashboard</h1>
        <Button variant="outline" onClick={handleLogout} className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="post" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="post" className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Post Job
            </TabsTrigger>
            <TabsTrigger value="jobs" className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Posted Jobs
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Chat
            </TabsTrigger>
          </TabsList>

          {/* Post Job Tab */}
          <TabsContent value="post">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Post a New Job</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePostJob} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Job Title</label>
                    <Input
                      placeholder="e.g., Senior React Developer"
                      value={newJob.title}
                      onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <Textarea
                      placeholder="Describe the job requirements..."
                      rows={5}
                      value={newJob.description}
                      onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Budget</label>
                    <Input
                      placeholder="e.g., $5,000"
                      value={newJob.budget}
                      onChange={(e) => setNewJob({ ...newJob, budget: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Post Job
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Posted Jobs Tab */}
          <TabsContent value="jobs">
            <div className="grid gap-4 md:grid-cols-2">
              {jobs.map((job) => (
                <Card key={job.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{job.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-primary">{job.budget}</span>
                      <span className="text-muted-foreground">{job.applicants} applicants</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Posted {job.postedAt}</p>
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
                      <p className="font-medium">{chat.freelancerName}</p>
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
                      <CardTitle className="text-lg">{selectedChat.freelancerName}</CardTitle>
                      <p className="text-sm text-muted-foreground">{selectedChat.jobTitle}</p>
                    </CardHeader>
                    <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                      {selectedChat.messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${msg.sender === "institution" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[70%] p-3 rounded-lg ${
                              msg.sender === "institution"
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

export default InstitutionDashboard;
