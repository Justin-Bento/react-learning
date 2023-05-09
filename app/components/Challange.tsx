
export default function Challange({ Headline, Status, Supporting, children }: any) {
  return (
    <>
      <div className="max-w-3xl p-4 mx-auto space-y-2 sm:px-6 lg:px-8">
        <h2 className="text-base font-bold tracking-tight text-gray-900">Test #{Status}</h2>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">{Headline}</h2>
        <p className="text-lg leading-8 text-gray-600">
          {Supporting}
        </p>
        {children}
      </div>
    </>
  );
}