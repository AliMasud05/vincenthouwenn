
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Pencil } from "lucide-react"
import Link from "next/link"

export default function ServiceDetailPage() {
  const service = {
    id: "1",
    name: "Lawn car Maintenance",
    category: "Cleaning",
    price: "$100",
    duration: "1 Hour",
    description:
      "Make your home fresh, tidy, and germ-free with our professional home cleaning services. Our expert cleaners use eco-friendly products to clean every nook and cranny of your home. Our expert cleaners use eco-friendly products to clean every nook and cranny of your home.",
    location: "New Jersey, USA",
    status: "Active",
  }

  return (
    <div>
      <div className="p-6">
         {/* back button */}
         <Link href="/dashboard/services" className="flex justify-between items-center mb-6">
          <Button className="bg-sky-500 hover:bg-sky-600">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Services
          </Button>
          </Link>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col items-center gap-4 md:w-1/4">
                <div className="w-32 h-32 bg-sky-100 rounded-md flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-sky-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-semibold">{service.name}</h2>
                  <p className="text-sm text-muted-foreground">{service.category}</p>
                </div>
                <Button className="bg-sky-500 hover:bg-sky-600">
                  <Pencil className="h-4 w-4 mr-2" />
                  Edit Service
                </Button>
              </div>

              <div className="flex-1">
                <Tabs defaultValue="information">
                  <TabsList className="mb-4">
                    <TabsTrigger value="information">Service Information</TabsTrigger>
                    <TabsTrigger value="providers">Service Provider & Reviews</TabsTrigger>
                  </TabsList>
                  <TabsContent value="information" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Service Name</h3>
                        <p>{service.name}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Category</h3>
                        <p>{service.category}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Price</h3>
                        <p>{service.price}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Duration</h3>
                        <p>{service.duration}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Status</h3>
                        <p>{service.status}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Location</h3>
                        <p>{service.location}</p>
                      </div>
                      <div className="md:col-span-2">
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Description</h3>
                        <p>{service.description}</p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="providers">
                    <p className="text-muted-foreground">No service providers assigned yet.</p>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
