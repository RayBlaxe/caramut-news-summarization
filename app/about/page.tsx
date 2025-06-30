
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">

      <div className="container mx-auto py-8 ">
        <Card>
          <CardHeader>
            <CardTitle>About</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This is the about page for CARAMUT.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
