import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:round rounded-full mx-auto" src="/basit-pic.jpeg" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
      "Hello, my name is Syed Basit Ali And I have 7 years bankung experiance in bank al habib ltd and now im a student of AI technology and Mr Asif Langrah sb is great instructor.
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Syed Basit Ali
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        AI Project Member
      </div>
    </figcaption>
  </div>
</figure></div>
    </main>
  );
}
