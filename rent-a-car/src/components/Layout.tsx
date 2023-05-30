import { Navbar } from "./Navbar"

type LayoutProps = {
    children: React.ReactNode
}
 
export const Layout = ({children}: LayoutProps ) => {
  return (
    <>
      <Navbar />
    <main> {children} </main>
    </>
  
  )
}
 