const Domine_700Bold = {fontFamily: 'Domine-Bold'};
const NunitoSans_700Bold = {fontFamily: 'NunitoSans-Bold'};
const NunitoSans_400Regular = {fontFamily: 'NunitoSans-Regular'};
const NunitoSans_600SemiBold = {fontFamily: 'NunitoSans-SemiBold'};

export const fonts = {
  Domine_700Bold: {...Domine_700Bold},
  NunitoSans_700Bold: {...NunitoSans_700Bold},
  NunitoSans_400Regular: {...NunitoSans_400Regular},
  NunitoSans_600SemiBold: {...NunitoSans_600SemiBold},

  H1: {
    ...Domine_700Bold,
    fontSize: 32,
    lineHeight: 32 * 1.3,
  },
  H2: {
    ...Domine_700Bold,
    fontSize: 22,
    lineHeight: 22 * 1.5,
  },
  H3: {
    ...Domine_700Bold,
    fontSize: 20,
    lineHeight: 20 * 1.5,
  },
  H4: {
    ...Domine_700Bold,
    fontSize: 16,
    lineHeight: 16 * 1.3,
  },
  H5: {
    ...Domine_700Bold,
    fontSize: 14,
    lineHeight: 14 * 1.5,
  },
  H6: {
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: 14,
    lineHeight: 14 * 1.5,
  },

  textStyle_14: {
    ...NunitoSans_400Regular,
    fontSize: 14,
    lineHeight: 14 * 1.5,
  },
  textStyle_16: {
    ...NunitoSans_400Regular,
    fontSize: 16,
    lineHeight: 16 * 1.7,
  },
};
