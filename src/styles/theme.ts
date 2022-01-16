import colors from './colors';
import fonts from './fonts';

const defaultTheme = {
  ...colors,
  ...fonts,

  ui00: colors.white,
  ui01: colors.black,

  ui10: colors.gray000,
  ui11: colors.gray100,
  ui12: colors.gray200,
  ui13: colors.gray300,
  ui14: colors.gray400,
  ui15: colors.gray500,
  ui16: colors.gray600,
  ui17: colors.gray700,
  ui18: colors.gray800,
  ui19: colors.gray900,

  ui25: colors.orange500,

  ui39: colors.red900,
};

export default { defaultTheme };
