import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Button>Default</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="link">link</Button>
      <Button variant="outline">outline</Button>
    </div>
  );
}
