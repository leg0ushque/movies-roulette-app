export default function EditLayout( { children } : { children: React.ReactNode } ) {
  return (
    <div style={{border: "2px solid blue"}}>
      <div>movieId edit layout</div>
      {children}
    </div>
  );
}