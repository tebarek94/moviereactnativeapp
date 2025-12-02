import MoveCrad from "@/components/moveCrad";
import SearchBar from "@/components/searchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovie } from "@/services/api";
import useFetch from "@/services/useFetch";
import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch,
    reset,
  } = useFetch(() => fetchMovie({ query: searchQuery }), false);

  useEffect(() => {
    const timeOutid = setTimeout(async () => {
      if (searchQuery.trim()) {
        await refetch();
      } else {
        reset();
      }
    }, 500);

    // FIXED cleanup
    return () => clearTimeout(timeOutid);
  }, [searchQuery]);

  const noResults =
    !moviesLoading &&
    !moviesError &&
    searchQuery.trim().length > 0 &&
    movies?.length === 0;

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="flex-1 absolute w-full z-0"
        resizeMode="cover"
      />

      <FlatList
        data={movies ?? []}
        renderItem={({ item }) => <MoveCrad {...item} />}
        keyExtractor={(item) => item.id.toString()}
        className="px-5"
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 20,
          gap: 20,
          paddingRight: 5,
        }}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center mt-20">
              <Image source={icons.logo} className="w-12 h-10" />
            </View>

            <View className="my-5">
              <SearchBar
                placeholder="Search movies"
                value={searchQuery}
                onChangeText={(text: string) => setSearchQuery(text)}
                onPress={refetch}
              />

              {moviesLoading && (
                <ActivityIndicator size="large" color="#0000ff" />
              )}

              {moviesError && (
                <Text className="text-red-500 px-5 my-3">
                  Error : {moviesError.message}
                </Text>
              )}

              {!moviesLoading && !moviesError && movies?.length > 0 && (
                <Text className="text-lg text-white font-bold">
                  Search Results: {searchQuery}
                </Text>
              )}

              {/* NEW: message for no results */}
              {noResults && (
                <Text className="text-white text-center mt-3">
                  No movies found for {searchQuery}
                </Text>
              )}
            </View>
          </>
        }
      />
    </View>
  );
};

export default Search;
