type SectionProps = {
    children: React.ReactNode,
    px?: number,
    py?: number
    bgColor?: string,
    bgNum?: number,
    pos?: string
}
 
export const Section = ({children, px, py, bgColor, bgNum, pos }: SectionProps ) => {
  return (
    <section className={`${pos} px-${px} py-${py} bg-${bgColor}-${bgNum}  `}>
        {children}
    </section>
    
  
  )
}
 