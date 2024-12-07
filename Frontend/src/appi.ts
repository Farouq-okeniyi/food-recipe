export const searchRecipts =async(searchTerms:string, page:number)=>{
    const baseurl = new URL('http://localhost:5000/api/recipts/search')
    baseurl.searchParams.append('searchTerms', searchTerms)
    baseurl.searchParams.append('page', String(page))

    const response = await fetch(baseurl)

    if(!response.ok) throw new Error(`HTTP ERROR! Status: ${response.status}`)
    
    return response.json()
}

