/*
instruction : 
Anagram adalah istilah dimana suatu string jika dibolak balik ordernya maka akan sama eg. 'aku' dan 'kua' adalah Anagram, 'aku' dan 'aka' bukan Anagram.
Dibawah ini ada array berisi sederetan Strings. ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']
Silahkan kelompokkan/group kata-kata di dalamnya sesuai dengan kelompok Anagramnya,
Catatan: tidak boleh menggunakan syntax es6 map, reduce, find, filter

#Expected Output
[['kita', 'atik', 'tika'], ['aku', 'kua'], ['makan'], ['kia']]
 */

/*
answer number 4
 */
const arr = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']

function processAnagramString(array) {
  const result = []

  for (let i = 0; i < array.length; i++) {
    const str = array[i].split('').sort().join('')
    if (!result.hasOwnProperty(str)) {
      result[str] = []
    }
    result[str].push(array[i])
  }
  return JSON.stringify(Object.values(result))
}

console.log(processAnagramString(arr))
