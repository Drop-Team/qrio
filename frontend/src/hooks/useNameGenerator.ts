import { adjectives, animals, colors, Config, uniqueNamesGenerator } from "unique-names-generator";

export const useNameGenerator = () => {
  const generateName = (uuid: string) => {
    const config: Config = {
      dictionaries: [adjectives, colors, animals],
      separator: ' ',
      style: 'capital',
      seed: uuid,
    };

    return uniqueNamesGenerator(config);
  }

  return [generateName] as const;
}