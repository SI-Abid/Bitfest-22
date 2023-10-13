
export const App = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBhIqib-vFJwvMMPWlNTdKAAzc_CDorxOg",
  });
  // console.log(process.env);
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  return (
    <>
      <h1 className='text-red-600'>App</h1>
      <button className="btn btn-primary">Primary</button>
    </>
  )
}
