// app/components/UserProfileTable.tsx
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

interface UserProfile {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  address: {
    countryFlag: string;
    location: string;
  };
  phoneNumber: string;
  email: string;
}

const userProfileData: UserProfile = {
  fullName: "Emily Johnson",
  dateOfBirth: "January 1, 1987",
  gender: "Female",
  nationality: "American",
  address: {
    countryFlag: "https://flagcdn.com/us.svg",
    location: "California - United States",
  },
  phoneNumber: "(213) 555-1234",
  email: "johnson@example.com",
};

const UserProfileTable = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-4">
        <Image
          src="/profileImage.svg"
          alt="Profile"
          className="w-16 h-16 rounded-full mr-4"
          width={64}
          height={64}
        />
        <div>
          <h2 className="text-xl font-semibold">{userProfileData.fullName}</h2>
          <p className="text-gray-500">{userProfileData.email}</p>
        </div>
      </div>
      <Table>
        <TableCaption>Personal details</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Field</TableHead>
            <TableHead>Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Full name:</TableCell>
            <TableCell>{userProfileData.fullName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Date of Birth:</TableCell>
            <TableCell>{userProfileData.dateOfBirth}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Gender:</TableCell>
            <TableCell>{userProfileData.gender}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Nationality:</TableCell>
            <TableCell>{userProfileData.nationality}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Address:</TableCell>
            <TableCell>
              <span className="flex items-center">
                <img
                  src={userProfileData.address.countryFlag}
                  alt="Country Flag"
                  className="w-5 h-5 mr-2"
                />
                {userProfileData.address.location}
              </span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Phone Number:</TableCell>
            <TableCell>{userProfileData.phoneNumber}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Email:</TableCell>
            <TableCell>{userProfileData.email}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default UserProfileTable;
