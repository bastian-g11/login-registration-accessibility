import useLocalStorage from './useLocalStorage';

const useToggle = (key, initValue) => {
  const [value, setValue] = useLocalStorage(key, initValue);

  const toggle = (togValue) => {
    setValue((prevState) =>
      typeof togValue === 'boolean' ? togValue : !prevState
    );
  };

  return [value, toggle];
};

export default useToggle;
