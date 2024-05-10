export function transliterate(text: string | string[]): string {
    const cyrillicToLatinMap: Record<string, string> = {
        'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'E', 'Ж': 'Zh',
        'З': 'Z', 'И': 'I', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N', 'О': 'O',
        'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'Kh', 'Ц': 'Ts',
        'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Shch', 'Ъ': ' ', 'Ы': 'Y', 'Ь': ' ', 'Э': 'E', 'Ю': 'Yu',
        'Я': 'Ya', 'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e',
        'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
        'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh',
        'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ъ': ' ', 'ы': 'y', 'ь': ' ', 'э': 'e',
        'ю': 'yu', 'я': 'ya'
    };

    const transliterateWord = (word: string): string =>
        word.split('')
            .map(char => cyrillicToLatinMap[char] || char)
            .join('')
            .replace(/\s+/g, '-')
            .replace(/-+$/, '')
            .toLowerCase();

    if (Array.isArray(text)) {
        if (text.length > 1) {
            return text.map(transliterateWord).join('/');
        } else {
            return text.length === 1 ? transliterateWord(text[0]) : '';
        }
    } else {
        return transliterateWord(text);
    }
}