import FooterOne from '@/layouts/footers/FooterOne'
import HeaderOne from '@/layouts/headers/HeaderOne'
import ContactArea from './ContactArea'

const Contact = () => {
   return (
      <>
         <HeaderOne style={true} />
         <ContactArea />
         <FooterOne style={false} />
      </>
   )
}

export default Contact
