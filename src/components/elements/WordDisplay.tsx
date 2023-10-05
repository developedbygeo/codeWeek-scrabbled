type WordDisplayProps = {
  word: string;
};

const WordDisplay = ({ word }: WordDisplayProps) => (
  <span className="text-10xl">{word.split('').join(' ')}</span>
);

export default WordDisplay;
