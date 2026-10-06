import { FaceSlightlyFrowning } from "lucide-react";

export default function PageNotFount() {
  return (
    <div className="alert alert-danger text-center">
      <h3 className="display-1"> 404</h3>
      <FaceSlightlyFrowning
        size={100}
        className="mb-2"
      />
      <h4>Page Not Found</h4>
      <p>The reource requested could not be found on this server!</p>
    </div>
  );
}
