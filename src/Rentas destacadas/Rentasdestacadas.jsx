

const Rentasdestacadas = () => {
  return (
    <div className="px-4 h-full w-full">
      <p className="text-3xl text-primary font-semibold pb-6 mt-6">Rentas Destacadas</p>
      <div className="w-full h-full flex flex-col space-y-6 items-center justify-center">
      <div className="w-full h-96 bg-chicago bg-cover rounded-xl ">
        <p className="CardTitle">Chicago</p>
        <p className="text-sm pl-8 text-black mr-24">2 habitaciones, baño y cocina</p>
      </div>
      <div className="w-full h-96 bg-norway bg-cover rounded-xl ">
        <p className="CardTitle">Noruega</p>
        <p className="text-sm pl-8 text-black mr-24">3 habitaciones con vista al paisaje Noruego</p>
      </div>
      <div className="w-full h-96 bg-switzerland bg-cover rounded-xl ">
        <p className="CardTitle">Suiza</p>
        <p className="text-sm pl-8 text-black mr-24">1 habitación con baño y cocina</p>
      </div>
      <div className="w-full h-96 bg-LA bg-cover rounded-xl ">
        <p className="CardTitle">Los Ángeles</p>
        <p className="text-sm pl-8 text-black mr-24">2 habitaciones con baño, cocina y piscina en Beverly Hills</p>
      </div>
      <div className="w-full h-96 bg-miami bg-cover rounded-xl ">
        <p className="CardTitle">Miami</p>
        <p className="text-sm pl-8 text-black mr-24">3 habitaciones cerca del mar con baño y cocina </p>
      </div>
      </div>

    </div>
  )
}

export default Rentasdestacadas