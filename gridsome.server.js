module.exports = function (api) {
  api.loadSource(async actions => {
    const Surahs = require('./src/data/surahs.json');
    const Verses = require('./src/data/verses.json');
    const Translations = require('./src/data/translations.json');

    const surahCollection = actions.addCollection('Surah');
    Surahs.forEach((surah, surahIndex) => {
      const prevSurah = Surahs[surahIndex - 1];
      const nextSurah = Surahs[surahIndex + 1];
      surahCollection.addNode({
        id: Number(surah.index),
        ...surah,
        nextSurah: nextSurah ? { id: Number(nextSurah.index), title: nextSurah.title } : null,
        prevSurah: prevSurah ? { id: Number(prevSurah.index), title: prevSurah.title } : null,
        verses: Verses.filter(v => v.surah == parseInt(surah.index)).map(v => {
          return {
            ...v,
            translation: Translations.find(t => t.surah == parseInt(surah.index) && t.verse == v.index).translation
          }
        })
      });
    })
  });
}
