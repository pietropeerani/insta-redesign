export default function Header() {
  return (
    <header className="w-full flex justify-between items-center p-4 text-white">
      <div style={{fontFamily: 'Instagram Sans'}}>
        <div className="!text-3xl font-bold">Riccardo Cambò</div>
        <div className="!text-sm font-bold">
          <span className="bg-[linear-gradient(-45deg,#F3C94E,#EE8131,#E84379,#EA356A,#6E3BF1,#C128BF)] bg-clip-text text-transparent mr-0.5">@</span>
          breccia.riccardo
        </div>
        <div className="!text-sm">Designer</div>
      </div>
      <div className="flex gap-4">
        <button className="bg-white p-4 rounded-full cursor-pointer">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3" cy="11" r="2" fill="black" />
            <circle cx="11" cy="11" r="2" fill="black" />
            <circle cx="19" cy="11" r="2" fill="black" />
          </svg>
        </button>
        <button className="bg-white p-4 rounded-full cursor-pointer">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.3078 3.88175C19.6198 3.88674 19.9068 4.05547 20.0637 4.32511C20.2203 4.5947 20.2242 4.92659 20.0744 5.20011L12.0149 19.915C11.8377 20.2384 11.4799 20.4196 11.1145 20.37C10.7491 20.3205 10.452 20.0502 10.3674 19.6913L8.29807 10.9091L2.10179 5.16593C1.83124 4.91518 1.74275 4.52293 1.88011 4.18058C2.01753 3.83837 2.35218 3.6162 2.72093 3.62198L19.3078 3.88175ZM10.1467 10.9901L11.5686 17.0233L17.0539 7.00675L10.1467 10.9901ZM9.30784 9.4169L15.9104 5.60929L5.01682 5.43936L9.30784 9.4169Z" fill="black" />
          </svg>
        </button>
      </div>
    </header>
  )
}
