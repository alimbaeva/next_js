import React from 'react'
import Link from 'next/link'

type Props = {
    result: Result
}

export default function Item({ result }: Props) {
  const itemTextCol = (
    <div className="flex flex-col justify-center">
        <h2>
            <Link 
            href={`https://en.wikipedia.org/?curid=${result.pageid}`}
            target="_blank"
            className="text-xl font-bold underline"
            >
                {result.title}
            </Link>
        </h2>
        <p>{result.extract}</p>
    </div>
  )

  const content = result
}