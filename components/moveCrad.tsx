import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
const MoveCrad = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="flex-1 m-1">
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${poster_path}`,
          }}
          className="w-full h-48 rounded-lg"
        />
        <Text className="text-white mt-2 font-semibold" numberOfLines={1}>
          {title}
        </Text>
        <View className="flex-row justify-between items-center">
          <Text className="text-gray-400 text-sm">
            {release_date?.split("-")[0]}
          </Text>
          <Text className="text-yellow-400 text-sm">
            ⭐ {Math.round(vote_average)}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MoveCrad;
