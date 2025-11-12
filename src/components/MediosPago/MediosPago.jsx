import prex from '../../assets/iconos/prex.png'
import visa from '../../assets/iconos/visa.png'
import mercadoPago from '../../assets/iconos/mercado-pago.png'

const MediosPago = () => {
  return (
    <div className='mediosPago'>
      <h3 className='title'>MEDIOS DE PAGO</h3>
      <div className="info">
        <span>Para abonar la compra una vez realizada, pude usar estos medios de pago:</span>

        <div className="medios">

          <div className="prex">
            <img src={prex} alt="Prex" />
            <br />
            <h3 className='titulo-pago'>Prex (Uruguay)</h3>
            <p className='titulo-pago'><strong>Nro. Cuenta</strong></p>
            <p className='titulo-pago'>1887884</p>
          </div>

          <div className="mercadoPago">
            <img src={mercadoPago} alt="Mercado-Pago" />
            <h3 className='titulo-pago'>Mercado Pago (Uruguay)</h3>
            <p className='titulo-pago'><strong>Nro. Cuenta</strong></p>
            <p className='titulo-pago'>1001931384992</p>
          </div>

          <div className="bcoProvincia">
            <img src={visa} alt="Visa-Bco-Prov" />
            <h3 className='titulo-pago'>Bco. Provincia (Argentina)</h3>
            <p className='titulo-pago'><strong>Nro. Cuenta</strong></p>
            <p className='titulo-pago'>0140114703205052645107</p>
            <p className='titulo-pago'><strong>ALIAS:</strong></p>
            <p className='titulo-pago'>SANTO.ALCE.BROMA</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default MediosPago
