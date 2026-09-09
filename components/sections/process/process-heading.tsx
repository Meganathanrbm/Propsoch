export function ProcessHeading() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-center text-sm leading-[1.35] text-muted xl:text-left">
        Buying a property should not take you forever
      </p>
      <h2
        id="process-heading"
        className="w-fit text-center text-2xl leading-[1.35] font-normal text-coolgrey-100 xl:text-left xl:text-[2.5rem]"
      >
        Here&apos;s how you will find a home with us in{" "}
        <span className="font-semibold italic">25 days</span>
      </h2>
    </div>
  );
}
