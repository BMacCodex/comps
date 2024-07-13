import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        vulputate, lacus ut sodales suscipit, diam mi consequat sapien, id
        suscipit urna mi in eros. Cras lacinia nisl a dignissim efficitur.
        Mauris tincidunt risus eget pellentesque pharetra. Vivamus est dolor,
        iaculis et efficitur ac, ultrices eu sem. Proin eget ligula euismod,
        hendrerit velit ac, suscipit quam. Sed euismod dapibus augue, vel
        interdum est volutpat vel. Pellentesque diam arcu, tristique vel sem
        accumsan, ornare ultricies dolor. Phasellus sed nibh a tortor mattis
        finibus. Suspendisse efficitur justo vitae elementum ultricies. Praesent
        iaculis eget nibh vel sodales. Morbi at molestie lectus. Mauris
        ullamcorper nisl sed neque aliquet, non dignissim metus tincidunt.
        Maecenas non rutrum metus, eget mollis eros.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        vulputate, lacus ut sodales suscipit, diam mi consequat sapien, id
        suscipit urna mi in eros. Cras lacinia nisl a dignissim efficitur.
        Mauris tincidunt risus eget pellentesque pharetra. Vivamus est dolor,
        iaculis et efficitur ac, ultrices eu sem. Proin eget ligula euismod,
        hendrerit velit ac, suscipit quam. Sed euismod dapibus augue, vel
        interdum est volutpat vel. Pellentesque diam arcu, tristique vel sem
        accumsan, ornare ultricies dolor. Phasellus sed nibh a tortor mattis
        finibus. Suspendisse efficitur justo vitae elementum ultricies. Praesent
        iaculis eget nibh vel sodales. Morbi at molestie lectus. Mauris
        ullamcorper nisl sed neque aliquet, non dignissim metus tincidunt.
        Maecenas non rutrum metus, eget mollis eros.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        vulputate, lacus ut sodales suscipit, diam mi consequat sapien, id
        suscipit urna mi in eros. Cras lacinia nisl a dignissim efficitur.
        Mauris tincidunt risus eget pellentesque pharetra. Vivamus est dolor,
        iaculis et efficitur ac, ultrices eu sem. Proin eget ligula euismod,
        hendrerit velit ac, suscipit quam. Sed euismod dapibus augue, vel
        interdum est volutpat vel. Pellentesque diam arcu, tristique vel sem
        accumsan, ornare ultricies dolor. Phasellus sed nibh a tortor mattis
        finibus. Suspendisse efficitur justo vitae elementum ultricies. Praesent
        iaculis eget nibh vel sodales. Morbi at molestie lectus. Mauris
        ullamcorper nisl sed neque aliquet, non dignissim metus tincidunt.
        Maecenas non rutrum metus, eget mollis eros.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        vulputate, lacus ut sodales suscipit, diam mi consequat sapien, id
        suscipit urna mi in eros. Cras lacinia nisl a dignissim efficitur.
        Mauris tincidunt risus eget pellentesque pharetra. Vivamus est dolor,
        iaculis et efficitur ac, ultrices eu sem. Proin eget ligula euismod,
        hendrerit velit ac, suscipit quam. Sed euismod dapibus augue, vel
        interdum est volutpat vel. Pellentesque diam arcu, tristique vel sem
        accumsan, ornare ultricies dolor. Phasellus sed nibh a tortor mattis
        finibus. Suspendisse efficitur justo vitae elementum ultricies. Praesent
        iaculis eget nibh vel sodales. Morbi at molestie lectus. Mauris
        ullamcorper nisl sed neque aliquet, non dignissim metus tincidunt.
        Maecenas non rutrum metus, eget mollis eros.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        vulputate, lacus ut sodales suscipit, diam mi consequat sapien, id
        suscipit urna mi in eros. Cras lacinia nisl a dignissim efficitur.
        Mauris tincidunt risus eget pellentesque pharetra. Vivamus est dolor,
        iaculis et efficitur ac, ultrices eu sem. Proin eget ligula euismod,
        hendrerit velit ac, suscipit quam. Sed euismod dapibus augue, vel
        interdum est volutpat vel. Pellentesque diam arcu, tristique vel sem
        accumsan, ornare ultricies dolor. Phasellus sed nibh a tortor mattis
        finibus. Suspendisse efficitur justo vitae elementum ultricies. Praesent
        iaculis eget nibh vel sodales. Morbi at molestie lectus. Mauris
        ullamcorper nisl sed neque aliquet, non dignissim metus tincidunt.
        Maecenas non rutrum metus, eget mollis eros.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        vulputate, lacus ut sodales suscipit, diam mi consequat sapien, id
        suscipit urna mi in eros. Cras lacinia nisl a dignissim efficitur.
        Mauris tincidunt risus eget pellentesque pharetra. Vivamus est dolor,
        iaculis et efficitur ac, ultrices eu sem. Proin eget ligula euismod,
        hendrerit velit ac, suscipit quam. Sed euismod dapibus augue, vel
        interdum est volutpat vel. Pellentesque diam arcu, tristique vel sem
        accumsan, ornare ultricies dolor. Phasellus sed nibh a tortor mattis
        finibus. Suspendisse efficitur justo vitae elementum ultricies. Praesent
        iaculis eget nibh vel sodales. Morbi at molestie lectus. Mauris
        ullamcorper nisl sed neque aliquet, non dignissim metus tincidunt.
        Maecenas non rutrum metus, eget mollis eros.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        vulputate, lacus ut sodales suscipit, diam mi consequat sapien, id
        suscipit urna mi in eros. Cras lacinia nisl a dignissim efficitur.
        Mauris tincidunt risus eget pellentesque pharetra. Vivamus est dolor,
        iaculis et efficitur ac, ultrices eu sem. Proin eget ligula euismod,
        hendrerit velit ac, suscipit quam. Sed euismod dapibus augue, vel
        interdum est volutpat vel. Pellentesque diam arcu, tristique vel sem
        accumsan, ornare ultricies dolor. Phasellus sed nibh a tortor mattis
        finibus. Suspendisse efficitur justo vitae elementum ultricies. Praesent
        iaculis eget nibh vel sodales. Morbi at molestie lectus. Mauris
        ullamcorper nisl sed neque aliquet, non dignissim metus tincidunt.
        Maecenas non rutrum metus, eget mollis eros.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        vulputate, lacus ut sodales suscipit, diam mi consequat sapien, id
        suscipit urna mi in eros. Cras lacinia nisl a dignissim efficitur.
        Mauris tincidunt risus eget pellentesque pharetra. Vivamus est dolor,
        iaculis et efficitur ac, ultrices eu sem. Proin eget ligula euismod,
        hendrerit velit ac, suscipit quam. Sed euismod dapibus augue, vel
        interdum est volutpat vel. Pellentesque diam arcu, tristique vel sem
        accumsan, ornare ultricies dolor. Phasellus sed nibh a tortor mattis
        finibus. Suspendisse efficitur justo vitae elementum ultricies. Praesent
        iaculis eget nibh vel sodales. Morbi at molestie lectus. Mauris
        ullamcorper nisl sed neque aliquet, non dignissim metus tincidunt.
        Maecenas non rutrum metus, eget mollis eros.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        vulputate, lacus ut sodales suscipit, diam mi consequat sapien, id
        suscipit urna mi in eros. Cras lacinia nisl a dignissim efficitur.
        Mauris tincidunt risus eget pellentesque pharetra. Vivamus est dolor,
        iaculis et efficitur ac, ultrices eu sem. Proin eget ligula euismod,
        hendrerit velit ac, suscipit quam. Sed euismod dapibus augue, vel
        interdum est volutpat vel. Pellentesque diam arcu, tristique vel sem
        accumsan, ornare ultricies dolor. Phasellus sed nibh a tortor mattis
        finibus. Suspendisse efficitur justo vitae elementum ultricies. Praesent
        iaculis eget nibh vel sodales. Morbi at molestie lectus. Mauris
        ullamcorper nisl sed neque aliquet, non dignissim metus tincidunt.
        Maecenas non rutrum metus, eget mollis eros.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        vulputate, lacus ut sodales suscipit, diam mi consequat sapien, id
        suscipit urna mi in eros. Cras lacinia nisl a dignissim efficitur.
        Mauris tincidunt risus eget pellentesque pharetra. Vivamus est dolor,
        iaculis et efficitur ac, ultrices eu sem. Proin eget ligula euismod,
        hendrerit velit ac, suscipit quam. Sed euismod dapibus augue, vel
        interdum est volutpat vel. Pellentesque diam arcu, tristique vel sem
        accumsan, ornare ultricies dolor. Phasellus sed nibh a tortor mattis
        finibus. Suspendisse efficitur justo vitae elementum ultricies. Praesent
        iaculis eget nibh vel sodales. Morbi at molestie lectus. Mauris
        ullamcorper nisl sed neque aliquet, non dignissim metus tincidunt.
        Maecenas non rutrum metus, eget mollis eros.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        vulputate, lacus ut sodales suscipit, diam mi consequat sapien, id
        suscipit urna mi in eros. Cras lacinia nisl a dignissim efficitur.
        Mauris tincidunt risus eget pellentesque pharetra. Vivamus est dolor,
        iaculis et efficitur ac, ultrices eu sem. Proin eget ligula euismod,
        hendrerit velit ac, suscipit quam. Sed euismod dapibus augue, vel
        interdum est volutpat vel. Pellentesque diam arcu, tristique vel sem
        accumsan, ornare ultricies dolor. Phasellus sed nibh a tortor mattis
        finibus. Suspendisse efficitur justo vitae elementum ultricies. Praesent
        iaculis eget nibh vel sodales. Morbi at molestie lectus. Mauris
        ullamcorper nisl sed neque aliquet, non dignissim metus tincidunt.
        Maecenas non rutrum metus, eget mollis eros.
      </p>
    </div>
  );
}

export default ModalPage;
