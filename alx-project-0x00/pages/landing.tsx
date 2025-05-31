import Button from "@/components/Button";
import Card from "@/components/Card";

export default function LandingPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Card />
  <Button
        title="Small Button"
        styles="rounded-sm bg-blue-500 px-4 py-2"
      />
      <Button
        title="Medium Button"
        styles="rounded-md bg-green-500 px-6 py-3"
      />
      <Button
        title="Large Button"
        styles="rounded-lg bg-red-500 px-8 py-4"
      />
    </div>
  );
}
