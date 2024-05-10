
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# copy the cs proj files
COPY *.csproj ./
# it restore all the dependencies
RUN dotnet restore 

# copy from source to directory
COPY . ./
# then publish and all the binary dependicies into output -> out
RUN dotnet publish -c Release -o out

# to run the application in the browser or in production
FROM mcr.microsoft.com/dotnet/aspnet:8.0 
WORKDIR /app

# so i copy the all the dependicies in out of build directory to copy in app directory

COPY --from=build /app/out .

# and run the application
ENTRYPOINT ["dotnet", "mihir.dll"]

