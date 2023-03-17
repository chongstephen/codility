function genomicRangeQuery(dnaSeq, startPos, endPos ) {
  const result = [];

  for(let i=0; i < startPos.length; i++) {
    const start = startPos[i];
    const end = endPos[i];
    let minFactor = 4;

    for(let j=start; j <= end; j++){
      const nucleotide = dnaSeq[i];
      let factor = 0;

      switch(nucleotide) {
        case: 'A': factor = 1;
        break;
        case 'C': factor = 2;
        break;
        case 'G': factor = 3;
        break;
        case 'T': factor = 4;
        break;
      }
      if(factor < minFactor) {
        minFactor = factor;
      }
    }
    result.push(minFactor);
  }
  return result;
}