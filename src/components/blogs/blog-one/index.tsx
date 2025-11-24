import BreadcrumbThree from "@/components/common/breadcrumb/BreadcrumbThree"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import BlogOneArea from "./BlogOneArea"
import FancyBanner from "@/components/common/FancyBanner"

const BlogOne = () => {
   return (
      <>
         <HeaderOne style={true} />
         <BreadcrumbThree title="Blog Grid" link="#" link_title="Pages" sub_title="Blog" style={false} />
         <BlogOneArea />
         <FancyBanner />
         <FooterOne style={false} />
      </>
   )
}

export default BlogOne;
