import { Navbar } from "./Navbar"

type LayoutProps = {
    children: React.ReactNode
}
 // CREATE A FOOTER COMPONENT
export const Layout = ({children}: LayoutProps ) => {
  return (
    <>
      <Navbar />
    <main> {children} </main>
    </>
  
  )
}
 