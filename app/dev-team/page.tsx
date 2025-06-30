
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DevTeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">

      <div className="container mx-auto py-8">
        <Card>
          <CardHeader>
            <CardTitle>Dev Team</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Meet the CARAMUT development team.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
