function Vowel(a)
{
    let vowel='aeiouAEIOU';
    let j=0;

    for(let i=0; i<a.length;i++)
    {
        if(vowel.includes(a[i]))
        {
            j++;
        }
    }
    return j;
}
console.log(Vowel("red and white"));