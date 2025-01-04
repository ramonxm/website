import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "#/components/ui/card";
import { Badge } from "#/components/ui/badge";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto container py-12 md:py-24 lg:py-32"
    >
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-8">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
          Featured Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Health & Fitness App</CardTitle>
              <CardDescription>React Native, TypeScript, Redux</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                A comprehensive fitness tracking application with real-time
                workout monitoring, nutrition planning, and social features.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>React Native</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Redux</Badge>
                <Badge>Firebase</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>E-commerce Platform</CardTitle>
              <CardDescription>iOS, Swift, SwiftUI</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                A native iOS shopping application with AR product preview,
                real-time inventory, and secure payment processing.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>iOS</Badge>
                <Badge>Swift</Badge>
                <Badge>SwiftUI</Badge>
                <Badge>ARKit</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
