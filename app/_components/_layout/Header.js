const Header = async () => {
  // Получаем комманды юзера
  const prices = [
    {
      sale: 0,
      price: 1241,
      name: 'Публикация'
    },
    {
      sale: 1300,
      price: 2512,
      name: 'Вып. действиe'
    }
  ]

  return (
    <div className="fixed w-full left-0 top-0 px-3 shadow-lg shadow-slate-500/0 bg-slate-900 rounded-b-3xl pb-4 border-b border-slate-800 justify-self-center">
      <div className="rounded-3xl">
        <div className="text-center uppercase font-medium text-slate-100 p-4">Актуальные цены:</div>
        <div className="grid grid-cols-2 gap-3">
          {prices.map(({ sale, price, name }) => (
            <div key={name} className="flex flex-col p-4 bg-slate-900 rounded-3xl border border-slate-800">
              <span className="text-xs text-slate-400 font-medium text-center">{name}:</span>
              <span className="text-xl text-white text-center">
                {sale > 0 ? (
                  <>
                    <span className="line-through text-sm">{price} </span>
                    <span className="text-blue-400 font-medium">{sale}</span> ₽
                  </>
                ) : (
                  <>{price} ₽</>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header