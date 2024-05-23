

const Faqs = () => {
  return (
    <div className='w-full h-full'>
    <div className="w-full h-full px-6 flex flex-col space-y-4">

    <div className='text-3xl text-primary font-semibold mt-6'>FAQS</div>
    <div>
        <p className="text-xl font-medium text-primary pt-2">Política de cancelación</p>
        <p className="text-md pt-2 mb-4 text-justify">
        Entendemos que a veces los planes cambian. Nuestra política de cancelación está diseñada para ofrecer flexibilidad
        y claridad a nuestros clientes. A continuación, se detalla nuestra política de cancelación:
        </p>
        <p className="text-md pt-2 mb-4 text-justify">
        Cancelaciones con 30 días o más de antelación:
        </p>
        <p className="text-sm mb-4 text-justify">
        Se ofrecerá un reembolso completo del importe pagado.
        </p>
        <p className="text-md pt-2 mb-4 text-justify">
        Cancelaciones entre 15 y 29 días de antelación:
        </p>
        <p className="text-sm mb-4 text-justify">
        Se reembolsará el 50% del importe pagado.
        </p>
        <p className="text-md pt-2 mb-4 text-justify">
        Cancelaciones con menos de 15 días de antelación:
        </p>
        <p className="text-sm mb-4 text-justify">
        No se ofrecerán reembolsos. Sin embargo, se podrá reprogramar la reserva para una fecha futura, 
        sujeto a disponibilidad y posible ajuste de tarifa.
        </p>

    </div>
    </div>
    </div>
  )
}

export default Faqs