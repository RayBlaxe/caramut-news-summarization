import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Users, Github, Linkedin, Mail, Code, Brain, Palette } from 'lucide-react'

const teamMembers = [
  {
    name: "Raihan",
    role: "Lead Developer & NLP Engineer",
    description: "Specializes in machine learning algorithms and natural language processing. Leads the development of the summarization engine.",
    avatar: "/api/placeholder/120/120",
    initials: "R",
    skills: ["Python", "NLP", "Machine Learning", "Backend Development"],
    color: "bg-primary",
    focus: "Algorithm Development"
  },
  {
    name: "Camelin",
    role: "Full-Stack Developer",
    description: "Focuses on web development and system integration. Responsible for creating seamless user experiences and API development.",
    avatar: "/api/placeholder/120/120",
    initials: "C",
    skills: ["React", "TypeScript", "Next.js", "API Development"],
    color: "bg-success",
    focus: "Frontend & Integration"
  },
  {
    name: "Mutiara",
    role: "UI/UX Designer & Frontend Developer",
    description: "Brings creative vision to life through thoughtful design and user interface development. Ensures optimal user experience.",
    avatar: "/api/placeholder/120/120",
    initials: "M",
    skills: ["UI/UX Design", "Frontend", "Tailwind CSS", "User Research"],
    color: "bg-secondary",
    focus: "Design & Experience"
  }
]

export default function DevTeam() {
  return (
    <div className="bg-background p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center py-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">Development Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the talented individuals behind Caramut News Summarization project
          </p>
        </div>

        {/* Team Overview */}
        <Card className="border-0 shadow-lg">
          <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Users className="h-8 w-8" />
              Our Team
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Our development team consists of three dedicated computer science students who collaborated to create this innovative news summarization platform. Each member brings unique skills and perspectives to the project, contributing to both the technical implementation and user experience design.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <Brain className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-foreground">NLP Expertise</h3>
                <p className="text-sm text-muted-foreground">Advanced machine learning and natural language processing</p>
              </div>
              <div className="text-center p-4 bg-success/10 rounded-lg">
                <Code className="h-8 w-8 text-success mx-auto mb-2" />
                <h3 className="font-semibold text-foreground">Full-Stack Development</h3>
                <p className="text-sm text-muted-foreground">End-to-end web application development</p>
              </div>
              <div className="text-center p-4 bg-secondary/10 rounded-lg">
                <Palette className="h-8 w-8 text-secondary mx-auto mb-2" />
                <h3 className="font-semibold text-foreground">UI/UX Design</h3>
                <p className="text-sm text-muted-foreground">User-centered design and interface development</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-4">
                  <Avatar className="w-24 h-24 mx-auto ring-4 ring-white shadow-lg">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className={`text-white text-xl font-bold ${member.color}`}>
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className={`absolute -bottom-2 -right-2 w-6 h-6 ${member.color} rounded-full border-2 border-white`}></div>
                </div>
                <CardTitle className="text-xl text-foreground">{member.name}</CardTitle>
                <Badge variant="outline" className="text-xs">
                  {member.role}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed text-center">
                  {member.description}
                </p>
                
                <div className="space-y-3">
                  <div className="text-center">
                    <h4 className="font-semibold text-foreground text-sm mb-2">Primary Focus</h4>
                    <Badge className={`${member.color} text-primary-foreground`}>
                      {member.focus}
                    </Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center space-x-3 pt-4 border-t border-border">
                  <div className="p-2 bg-muted rounded-full hover:bg-muted/80 cursor-pointer transition-colors">
                    <Github className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="p-2 bg-muted rounded-full hover:bg-muted/80 cursor-pointer transition-colors">
                    <Linkedin className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="p-2 bg-muted rounded-full hover:bg-muted/80 cursor-pointer transition-colors">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Collaboration Section */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-foreground">
              <Users className="h-8 w-8 text-primary" />
              Team Collaboration
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Development Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-foreground">Research & Planning</h4>
                      <p className="text-sm text-muted-foreground">Collaborative research on NLP techniques and project architecture</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-success text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-foreground">Design & Development</h4>
                      <p className="text-sm text-muted-foreground">Parallel development of ML models and web interface</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-secondary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-foreground">Integration & Testing</h4>
                      <p className="text-sm text-muted-foreground">Seamless integration of all components and comprehensive testing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-warning text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <h4 className="font-semibold text-foreground">Deployment & Documentation</h4>
                      <p className="text-sm text-muted-foreground">Final deployment and comprehensive project documentation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}