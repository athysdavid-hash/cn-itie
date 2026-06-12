export default function Page(props: any) {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-black text-red-600">
        DEBUG PAGE
      </h1>

      <pre className="mt-6">
        {JSON.stringify(props, null, 2)}
      </pre>
    </div>
  )
}