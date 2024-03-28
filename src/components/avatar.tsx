"use client";

import Image from 'next/image'

const Avatar = () => <div>
    <div
        className="block w-36 h-36 md:w-48 md:h-48 p-2 bg-white rounded-full overflow-hidden">
        <Image
            src={`/assets/img/me.png`}
            alt={'me'}
            width="128"
            height="128"
            sizes="100vw"
            className='pointer-events-none w-full h-full rounded-full' />
    </div>
</div>

export default Avatar