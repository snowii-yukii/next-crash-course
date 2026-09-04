'use client'

import Link from "next/link"
import Image from "next/image"

const ExploreBtn = () => {
    return (
        <button type="button" id="explore-btn" className="mt-7 mx-auto w-56 text-center">
            <Link href="/events">
                Explore Events
                <Image
                    src="/icons/arrow-down.svg"
                    alt="arrow-down"
                    width={20}
                    height={20}
                />
            </Link>
            
                

        </button>
    )
}

export default ExploreBtn