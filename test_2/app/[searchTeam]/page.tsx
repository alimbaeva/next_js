import React from 'react'
import getWikiresult from '@/lib/getWikiresult'
import Item from './components/Item'

type Props = {
    params: {
        searchTearm: string
    }
}

export async function generateMetadata({ params: { searchTearm }}: Props) {
    const wikiData: Promise<SearchResult> = getWikiresult(searchTearm)
    const data = await wikiData
    const displayTerm = searchTearm.replaceAll('%20', '')

    if (!data?.query?.pages) {
        return{
            title: `${displayTerm} Not Found`
        }
    }

    return {
        title: displayTerm,
        description: `Search results for ${displayTerm}`
    }
}

export default async function SearchResalts({ params: { searchTearm }}: Props) {
    const wikiData: Promise<SearchResult> = getWikiresult(searchTearm)
    const data = await wikiData
    const results: Result[] | undefined = data?.query?.pages
    
    const content = (
        <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
            {results
              ? Object.values(results).map((result) => {
                return <Item key={result.pageid} result={result} />
            })
              : <h2 className="p-2 text-xl">{`${searchTearm} not Faund`}</h2>
        }
        </main>
    )
    return content
}