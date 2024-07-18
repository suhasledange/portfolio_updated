const formatNumber = (number:number) => {
    if (isNaN(number)) {
      return "_";
    }

    return number < 1e3 ? number : `${(number / 1e3).toFixed(1)}K${number < 1e6 ? '' : number < 1e9 ? 'M' : 'B'}`;
  };

  export default formatNumber