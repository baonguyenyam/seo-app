import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About</h1>
      <p className="text-default-600 mt-2">
        My name is Nguyen Pham, I am a software engineer and I love to build
        things.
      </p>
   
    </div>
  );
}
