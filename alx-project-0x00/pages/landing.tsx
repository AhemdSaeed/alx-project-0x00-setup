import Button from "@/components/Button";
import Card from "@/components/Card";

export default function LandingPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
           <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Card />
       <div className="flex gap-4 mt-6">
        <Button title="Small Rounded" styles="text-sm rounded-sm" />
        <Button title="Medium Rounded" styles="text-base rounded-md" />
        <Button title="Large Rounded Full" styles="text-lg rounded-full" />
      </div>
    </div>
  );
}