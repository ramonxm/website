import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "#/components/ui/card";
import { Progress } from "#/components/ui/progress";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className=" mx-auto container py-12 md:py-24 lg:py-32 bg-muted/50"
    >
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-8">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
          Technical Skills
        </h2>
        <div className="grid w-full gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Mobile Development</CardTitle>
              <CardDescription>
                Core technologies and frameworks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">React Native</span>
                  <span className="text-sm">95%</span>
                </div>
                <Progress value={95} />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">iOS (Swift)</span>
                  <span className="text-sm">90%</span>
                </div>
                <Progress value={90} />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Android (Kotlin)</span>
                  <span className="text-sm">85%</span>
                </div>
                <Progress value={85} />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Additional Skills</CardTitle>
              <CardDescription>
                Supporting technologies and tools
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">TypeScript</span>
                  <span className="text-sm">90%</span>
                </div>
                <Progress value={90} />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Redux/State Management</span>
                  <span className="text-sm">85%</span>
                </div>
                <Progress value={85} />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">CI/CD</span>
                  <span className="text-sm">80%</span>
                </div>
                <Progress value={80} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
