import NewTodoForm from "@/components/NewTodoForm";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-24">
        <div>Home page</div>
        <NewTodoForm />
      </main>
    </>
  );
}
