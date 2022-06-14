export const apiRequest = async (
  url = '',
  optionObj: undefined | RequestInit = undefined,
  errorMessage: undefined | string = undefined
) => {
  try {
    const response = await fetch(url, optionObj);
    if (!response.ok) throw Error('Please reload the app');
  } catch (error) {
    errorMessage = (error as Error).message;
  } finally {
    return errorMessage;
  }
};
