import { useSession } from "next-auth/react";
import { getLayout } from "@/components/layout/layout";
import { Button } from "ui";
import { useGetAllAnimals } from "@/service-providers/animal";
import { useGetAllBirds } from "@/service-providers/bird";
import { useState } from "react";
import { AxiosError } from "axios";
import Image from "next/image";

const Home = () => {
  const {
    data: animalData,
    refetch: fetchAnimal,
    error: animalError,
    isLoading: isLoadingAnimalData,
  } = useGetAllAnimals();
  const {
    data: birdData,
    refetch: fetchBirds,
    error: birdError,
    isLoading: isLoadingBirdData,
  } = useGetAllBirds();

  const [display, setDisplay] = useState<"animal" | "bird" | undefined>(
    undefined
  );

  return (
    <div className="p-8">
      This is the dashboard page. This can be accessed both by an authenticated
      and an unauthenticated user.
      <ul className="py-10 list-decimal list-inside">
        <li>
          Visited the protected (client) page when authenticated/unauthenticated
        </li>
        <li>
          Visited the protected server page when authenticated/unauthenticated
        </li>
      </ul>
      <div className="flex">
        <div className="flex">
          <div className="m-2">
            <Button
              onClick={() => {
                setDisplay("animal");
                fetchAnimal();
              }}
            >
              Make protected api call
            </Button>
          </div>
          <div className="m-2">
            <Button
              onClick={() => {
                setDisplay("bird");
                fetchBirds();
              }}
            >
              Make public api call
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          {display === "animal" ? (
            <>
              <div>{isLoadingAnimalData ? <>Loading....</> : <></>}</div>
              <div>
                {animalData?.map((oneAnimal) => (
                  <div key={oneAnimal.id}>
                    <div className="">
                      <Image
                        src={oneAnimal.image ?? ""}
                        alt="item image"
                        width={600}
                        height={600}
                      />
                    </div>
                    <div>Kingdom: {oneAnimal.kingdom}</div>
                    <div>Species: {oneAnimal.species}</div>
                    <div>Name: {oneAnimal.name}</div>
                  </div>
                ))}
              </div>
              <div className="text-red-500">
                {(animalError as AxiosError)?.message}
              </div>
            </>
          ) : (
            <></>
          )}
          {display === "bird" ? (
            <>
              <div>{isLoadingBirdData ? <>Loading....</> : <></>}</div>
              <div>
                {birdData?.map((oneBird) => (
                  <div key={oneBird.id}>
                    <div className="">
                      <Image
                        src={oneBird.image ?? ""}
                        alt="item image"
                        width={400}
                        height={300}
                      />
                    </div>
                    <div>Kingdom: {oneBird.kingdom}</div>
                    <div>Species: {oneBird.species}</div>
                    <div>Name: {oneBird.name}</div>
                  </div>
                ))}
              </div>
              <div className="text-red-500">
                {(birdError as AxiosError)?.message}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

Home.getLayout = getLayout;
export default Home;
